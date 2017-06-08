/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3548Component } from './comp-3548.component';

describe('Comp3548Component', () => {
  let component: Comp3548Component;
  let fixture: ComponentFixture<Comp3548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
