/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4791Component } from './comp-4791.component';

describe('Comp4791Component', () => {
  let component: Comp4791Component;
  let fixture: ComponentFixture<Comp4791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
