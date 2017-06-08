/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service483Service } from './service-483.service';

describe('Service483Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service483Service]
    });
  });

  it('should ...', inject([Service483Service], (service: Service483Service) => {
    expect(service).toBeTruthy();
  }));
});
