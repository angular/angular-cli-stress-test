/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2970Component } from './comp-2970.component';

describe('Comp2970Component', () => {
  let component: Comp2970Component;
  let fixture: ComponentFixture<Comp2970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
