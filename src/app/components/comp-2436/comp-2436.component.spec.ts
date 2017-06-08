/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2436Component } from './comp-2436.component';

describe('Comp2436Component', () => {
  let component: Comp2436Component;
  let fixture: ComponentFixture<Comp2436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
