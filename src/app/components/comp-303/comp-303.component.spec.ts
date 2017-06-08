/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp303Component } from './comp-303.component';

describe('Comp303Component', () => {
  let component: Comp303Component;
  let fixture: ComponentFixture<Comp303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
