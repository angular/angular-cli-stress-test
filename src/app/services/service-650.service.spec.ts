/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service650Service } from './service-650.service';

describe('Service650Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service650Service]
    });
  });

  it('should ...', inject([Service650Service], (service: Service650Service) => {
    expect(service).toBeTruthy();
  }));
});
