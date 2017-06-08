/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp842Component } from './comp-842.component';

describe('Comp842Component', () => {
  let component: Comp842Component;
  let fixture: ComponentFixture<Comp842Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp842Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
