/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp272Component } from './comp-272.component';

describe('Comp272Component', () => {
  let component: Comp272Component;
  let fixture: ComponentFixture<Comp272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
