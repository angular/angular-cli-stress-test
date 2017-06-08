/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4511Component } from './comp-4511.component';

describe('Comp4511Component', () => {
  let component: Comp4511Component;
  let fixture: ComponentFixture<Comp4511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
