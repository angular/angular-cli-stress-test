/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2608Component } from './comp-2608.component';

describe('Comp2608Component', () => {
  let component: Comp2608Component;
  let fixture: ComponentFixture<Comp2608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
