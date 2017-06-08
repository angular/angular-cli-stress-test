/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp569Component } from './comp-569.component';

describe('Comp569Component', () => {
  let component: Comp569Component;
  let fixture: ComponentFixture<Comp569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
