/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2997Component } from './comp-2997.component';

describe('Comp2997Component', () => {
  let component: Comp2997Component;
  let fixture: ComponentFixture<Comp2997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
