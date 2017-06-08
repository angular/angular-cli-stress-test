/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp271Component } from './comp-271.component';

describe('Comp271Component', () => {
  let component: Comp271Component;
  let fixture: ComponentFixture<Comp271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
