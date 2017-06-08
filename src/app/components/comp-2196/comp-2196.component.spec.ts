/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2196Component } from './comp-2196.component';

describe('Comp2196Component', () => {
  let component: Comp2196Component;
  let fixture: ComponentFixture<Comp2196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
