/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp325Component } from './comp-325.component';

describe('Comp325Component', () => {
  let component: Comp325Component;
  let fixture: ComponentFixture<Comp325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
