/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2714Component } from './comp-2714.component';

describe('Comp2714Component', () => {
  let component: Comp2714Component;
  let fixture: ComponentFixture<Comp2714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
