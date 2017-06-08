/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp581Component } from './comp-581.component';

describe('Comp581Component', () => {
  let component: Comp581Component;
  let fixture: ComponentFixture<Comp581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
