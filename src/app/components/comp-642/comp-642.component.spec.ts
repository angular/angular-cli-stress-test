/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp642Component } from './comp-642.component';

describe('Comp642Component', () => {
  let component: Comp642Component;
  let fixture: ComponentFixture<Comp642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
