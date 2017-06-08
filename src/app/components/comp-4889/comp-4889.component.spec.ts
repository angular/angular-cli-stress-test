/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4889Component } from './comp-4889.component';

describe('Comp4889Component', () => {
  let component: Comp4889Component;
  let fixture: ComponentFixture<Comp4889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
