/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp176Component } from './comp-176.component';

describe('Comp176Component', () => {
  let component: Comp176Component;
  let fixture: ComponentFixture<Comp176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
