/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp552Component } from './comp-552.component';

describe('Comp552Component', () => {
  let component: Comp552Component;
  let fixture: ComponentFixture<Comp552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
