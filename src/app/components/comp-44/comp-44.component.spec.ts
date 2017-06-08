/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp44Component } from './comp-44.component';

describe('Comp44Component', () => {
  let component: Comp44Component;
  let fixture: ComponentFixture<Comp44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
