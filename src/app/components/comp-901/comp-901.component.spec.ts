/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp901Component } from './comp-901.component';

describe('Comp901Component', () => {
  let component: Comp901Component;
  let fixture: ComponentFixture<Comp901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
