/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3465Component } from './comp-3465.component';

describe('Comp3465Component', () => {
  let component: Comp3465Component;
  let fixture: ComponentFixture<Comp3465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
