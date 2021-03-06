/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4463Component } from './comp-4463.component';

describe('Comp4463Component', () => {
  let component: Comp4463Component;
  let fixture: ComponentFixture<Comp4463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
