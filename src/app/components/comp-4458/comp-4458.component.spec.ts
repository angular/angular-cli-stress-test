/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4458Component } from './comp-4458.component';

describe('Comp4458Component', () => {
  let component: Comp4458Component;
  let fixture: ComponentFixture<Comp4458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
