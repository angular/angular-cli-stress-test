/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3470Component } from './comp-3470.component';

describe('Comp3470Component', () => {
  let component: Comp3470Component;
  let fixture: ComponentFixture<Comp3470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
