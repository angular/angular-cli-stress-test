/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2433Component } from './comp-2433.component';

describe('Comp2433Component', () => {
  let component: Comp2433Component;
  let fixture: ComponentFixture<Comp2433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
