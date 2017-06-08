/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp583Component } from './comp-583.component';

describe('Comp583Component', () => {
  let component: Comp583Component;
  let fixture: ComponentFixture<Comp583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
