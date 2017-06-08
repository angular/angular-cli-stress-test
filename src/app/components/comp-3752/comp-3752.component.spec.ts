/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3752Component } from './comp-3752.component';

describe('Comp3752Component', () => {
  let component: Comp3752Component;
  let fixture: ComponentFixture<Comp3752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
