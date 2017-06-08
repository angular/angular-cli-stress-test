/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp672Component } from './comp-672.component';

describe('Comp672Component', () => {
  let component: Comp672Component;
  let fixture: ComponentFixture<Comp672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
