/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp627Component } from './comp-627.component';

describe('Comp627Component', () => {
  let component: Comp627Component;
  let fixture: ComponentFixture<Comp627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
