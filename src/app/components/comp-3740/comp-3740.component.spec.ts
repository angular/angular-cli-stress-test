/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3740Component } from './comp-3740.component';

describe('Comp3740Component', () => {
  let component: Comp3740Component;
  let fixture: ComponentFixture<Comp3740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
