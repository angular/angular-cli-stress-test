/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp434Component } from './comp-434.component';

describe('Comp434Component', () => {
  let component: Comp434Component;
  let fixture: ComponentFixture<Comp434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
