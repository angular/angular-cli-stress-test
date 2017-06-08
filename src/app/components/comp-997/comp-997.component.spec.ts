/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp997Component } from './comp-997.component';

describe('Comp997Component', () => {
  let component: Comp997Component;
  let fixture: ComponentFixture<Comp997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
