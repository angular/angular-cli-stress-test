/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp501Component } from './comp-501.component';

describe('Comp501Component', () => {
  let component: Comp501Component;
  let fixture: ComponentFixture<Comp501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
