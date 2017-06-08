/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2989Component } from './comp-2989.component';

describe('Comp2989Component', () => {
  let component: Comp2989Component;
  let fixture: ComponentFixture<Comp2989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
