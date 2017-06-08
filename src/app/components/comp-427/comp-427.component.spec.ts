/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp427Component } from './comp-427.component';

describe('Comp427Component', () => {
  let component: Comp427Component;
  let fixture: ComponentFixture<Comp427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
