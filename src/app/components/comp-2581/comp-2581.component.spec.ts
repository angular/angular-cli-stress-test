/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2581Component } from './comp-2581.component';

describe('Comp2581Component', () => {
  let component: Comp2581Component;
  let fixture: ComponentFixture<Comp2581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
