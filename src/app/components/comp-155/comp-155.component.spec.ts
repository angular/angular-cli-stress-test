/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp155Component } from './comp-155.component';

describe('Comp155Component', () => {
  let component: Comp155Component;
  let fixture: ComponentFixture<Comp155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
