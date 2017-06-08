/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp342Component } from './comp-342.component';

describe('Comp342Component', () => {
  let component: Comp342Component;
  let fixture: ComponentFixture<Comp342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
