/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3435Component } from './comp-3435.component';

describe('Comp3435Component', () => {
  let component: Comp3435Component;
  let fixture: ComponentFixture<Comp3435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
