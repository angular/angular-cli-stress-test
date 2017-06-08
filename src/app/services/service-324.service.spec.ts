/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service324Service } from './service-324.service';

describe('Service324Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service324Service]
    });
  });

  it('should ...', inject([Service324Service], (service: Service324Service) => {
    expect(service).toBeTruthy();
  }));
});
