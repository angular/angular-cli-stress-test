/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1642Component } from './comp-1642.component';

describe('Comp1642Component', () => {
  let component: Comp1642Component;
  let fixture: ComponentFixture<Comp1642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
