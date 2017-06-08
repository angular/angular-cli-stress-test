/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2511Component } from './comp-2511.component';

describe('Comp2511Component', () => {
  let component: Comp2511Component;
  let fixture: ComponentFixture<Comp2511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
