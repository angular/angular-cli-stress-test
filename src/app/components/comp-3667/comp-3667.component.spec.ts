/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3667Component } from './comp-3667.component';

describe('Comp3667Component', () => {
  let component: Comp3667Component;
  let fixture: ComponentFixture<Comp3667Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3667Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
