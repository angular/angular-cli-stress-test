/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3811Component } from './comp-3811.component';

describe('Comp3811Component', () => {
  let component: Comp3811Component;
  let fixture: ComponentFixture<Comp3811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
