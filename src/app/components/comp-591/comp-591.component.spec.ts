/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp591Component } from './comp-591.component';

describe('Comp591Component', () => {
  let component: Comp591Component;
  let fixture: ComponentFixture<Comp591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
