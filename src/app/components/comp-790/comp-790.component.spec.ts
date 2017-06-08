/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp790Component } from './comp-790.component';

describe('Comp790Component', () => {
  let component: Comp790Component;
  let fixture: ComponentFixture<Comp790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
