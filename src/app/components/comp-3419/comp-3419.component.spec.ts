/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3419Component } from './comp-3419.component';

describe('Comp3419Component', () => {
  let component: Comp3419Component;
  let fixture: ComponentFixture<Comp3419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
