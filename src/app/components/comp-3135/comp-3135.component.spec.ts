/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3135Component } from './comp-3135.component';

describe('Comp3135Component', () => {
  let component: Comp3135Component;
  let fixture: ComponentFixture<Comp3135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
