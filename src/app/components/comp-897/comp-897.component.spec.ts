/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp897Component } from './comp-897.component';

describe('Comp897Component', () => {
  let component: Comp897Component;
  let fixture: ComponentFixture<Comp897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
